def user_contacts(data):
    goa = {}
    for i in data :
        if len(i) == 2 :
            goa[i[0]] = i[1]
        else :
            goa[i[0]] = None
            
    return goa
