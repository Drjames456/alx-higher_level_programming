#!/usr/bin/python3
def search_replace(my_list, search, replace):
    my_list = [1, 2, 3, 4, 5, 4, 2, 1, 1, 4, 89]
    return list(map(lambda x: replace if x == search else x, my_list))
