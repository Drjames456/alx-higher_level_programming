#!/usr/bin/python3
""" This is a module that define an empty class"""


class Square:
    """ An empty class"""
    def __init__(self, size=0):
        self.__size = 0
        self.size = size



    def size(self):
        return self.size

    def size(self, value):
        if type(value) is not int:
            raise TypeError("size must be an integer")
        elif value < 0:
            raise ValueError("size must be >= 0")
        else:
            self.__size = value

    def area(self):
        return self.__size ** 2
