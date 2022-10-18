# Sorting a dictionary by the values

sample_dict = {'Mark': 12, 'Nate': 11, 'Noah': 11, 'Alex': 15}

sorted_list = sorted(sample_dict.items(), key=lambda x:x[1])

# This will actually return a list of sorted tuples.  To revert it to a dictionary, you need to use the dict() function:

sorted_dict = dict(sorted_list)

print(sorted_list)
print(sorted_dict)