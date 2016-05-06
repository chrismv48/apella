from collections import defaultdict


def merge_two_dicts(x, y):
    '''Given two dicts, merge them into a new dict as a shallow copy.'''
    z = x.copy()
    z.update(y)
    return z


def traverse_tree(node_id, tree, level=0):
    print '\t' * level + str(node_id) + ' - ' + tree[node_id]['title']
    children = tree[node_id]["children"]
    if children:
        level += 1
        for child in children:
            traverse_tree(child,
                          tree,
                          level)


def create_tree(nodes):
    tree = defaultdict(dict)
    for node in nodes:
        tree[node['premise_id']] = node
        tree[node['premise_id']].update({"children": [nd['premise_id'] for nd in nodes if node['premise_id'] ==
                                                      nd['parent_premise_id']]})

    return tree


def create_tree_of_dicts(nodes, parent_id):
    tree = [n for n in nodes if n['parent_premise_id'] == parent_id][0]

    create_tree_of_dicts_recursive(tree, parent_node, nodes)

    return tree


def create_tree_of_dicts_recursive(tree, parent_id, nodes):
    children = [n for n in nodes if n['parent_premise_id'] == parent_id]
    node = [n for n in nodes if n['premise_id'] == parent][0]
    tree[node['premise_id']] = node
    tree[node['premise_id']].update({"children": children})
    for child in children:
        # tree[child['premise_id']] = {}
        create_tree_of_dicts_recursive(tree[child['premise_id']], child['premise_id'], nodes)


results = [
    {"id": 1,
     "parent_id": None},
    {"id": 2,
     "parent_id": None},
    {"id": 3,
     "parent_id": 2},
    {"id": 4,
     "parent_id": 3},
]
foo = \
[
    {"id": 1,
     "children": []},
    {"id": 2,
     "children": [
         {"id": 3,
          "children": [
              {"id": 4,
               "children": []}
          ]}
     ]}
]


def create_tree2(results, parent_id, tree=None):
    children = [node for node in results if node['parent_premise_id'] == parent_id]
    if not tree:
        tree = children
    else:
        tree["children"] = children

    for child in children:
        create_tree2(results, child['premise_id'], tree)

    return tree


def create_tree3(results, parent_id):
    tree = []
    for node in results:
        if node['parent_premise_id'] == parent_id:
            tree.append(node)
