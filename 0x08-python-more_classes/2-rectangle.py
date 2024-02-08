#!/usr/bin/python3
"""this is a module that defines a class Rectangle"""


class Rectangle:
    """this define a class Rectangle"""

    def __init__(self, width = 0, height = 0):
        """this function define the dimension of a rectangle"""

        self.width = width
        self.height = height

    def width(self):
        """define the width of the rectangle"""

        return self.__width

    def width(self, value):
        """to get the value of width of the rectangle"""

        if not isinstance(value, int):
            raise TypeError('width must be integer')
        if value < 0:
            raise ValueError('width must be >= 0')
        self.width = value

    def height(self):
        """define the height of rectangle"""

        return self.__height

    def height(self, value):
        """To get the height of a rectangle"""

        if not isintance(value, int):
            raise TypeError('height must be integer')
        if value < 0:
            raise ValueError('height must be >= 0')
        self.__height = value

    def area(self):
        """get the area of the rectangle"""

        return self.__width * self.__height

    def perimeter(self):
        """to get the perimeter of the rectangle"""

        if self.__width == 0 or self.__height == 0:
            return 0
        return 2 * (self.__width + self.__height)
