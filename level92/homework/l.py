def sort_dict(d):
    item = list(d.items())
    for i in range(len(item)):
        for a in range(i +1, len(item)) :
            if item[i][1] < item[a][1] :
                item[i], item[a] = item[a], item[i] 
    return item
                