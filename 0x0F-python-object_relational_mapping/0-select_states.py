#!/usr/bin/python3
"""List all states from the database hbtn_0e_0_usa"""
import sys
import MySQLdb

if __name__ == "__main__":
    mysql_username = sys.argv[1]
    mysql_password = sys.argv[2]
    database_name = sys.argv[3]

    # Connect to the MySQL server running on localhost at port 3306
    db = MySQLdb.connect(host="localhost", port=3306, user=mysql_username,
                         passwd=mysql_password, db=database_name)

    # Create a cursor to execute SQL queries
    cur = db.cursor()

    # Execute a SQL query to select all states, sorted in ascending order by id
    cur.execute("SELECT * FROM states ORDER BY id ASC")

    # Fetch all the rows from the query result
    rows = cur.fetchall()

    # Print each row
    for row in rows:
        print(row)

    # Close the cursor and connection to clean up
    cur.close()
    db.close()

