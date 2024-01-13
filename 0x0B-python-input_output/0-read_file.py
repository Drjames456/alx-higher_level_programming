#!/usr/bin/python3
"""A funtion that reads a file and print it to stdout"""


def read_file(filename=""):
    """ print the content of UTF* to stdout"""

    with open(filename, encoding = "utf-8") as file:
        print(file.read(), end = "")

