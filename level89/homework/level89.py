import os

for folder_num in range(1, 6):
    folder_name = f"folder_{folder_num}"
    
    for file_num in range(1, 6):
        file_name = f"file_{file_num}.txt"
        file_path = os.path.join(folder_name, file_name)
        
        open(file_path, "w").close()