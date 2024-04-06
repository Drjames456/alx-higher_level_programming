#!/usr/bin/python3
for number in range(100):
    end_char = ", " if number < 99 else "\n"
    print(f"{number:02d}{end_char}", end="")
