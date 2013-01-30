### exA—database

* index table data
* distill values
* hash columns
* swivel columns and rows


####

    /* table object
    feed it data in multiple ways
    array of objects (raw) / must have stack/linear representation key'd on order of entry (the only uniqueness guarentee)
    encapsulate and protect the data
    dice the data into reference objects
    the data can be "had" in numerous ways
        give me (derive)
        -- col C (data)
        -- row 9
        -- swivel (r2c)
        -- just values
        -- headings (row Ø {Ø:0}) / attribute scheme
        -- relationality??
    query the table

    primary key is the data of 1 or more columns
    demand for uniqueness (collision) compounds / creates a new dimension
                                            plurality baked-in (how to treat compounding)
    ----- RAW -----
    {     B:'apple', C:2}
    {A:y, B:'apple', C:1}
    {A:y, B:'barbs'}
    {A:z, C:2, D:4}
    ---- NORMALIZED ----
    |Ø| (|A|   |B|   |C||D|)
    {1}, [?, 'apple', 2, ?]
    {2}, [y, 'apple', 1, ?]
    {3}, [y, 'barbs', ?, ?]
    {4}, [z, ?,       2, 4]
    === COLLISIONS ===
    [Ø, y, 'apple', 2]

    |A|
    [[{2},{3}]   == [[y, 'apple', 1, ?],[y, 'barbs', ?, ?]]
    [{4}]        == [z, ?, 2, 4]

    |B|
    [{1},{2}]    ==  [[?, 'apple', 2, ?],[y, 'apple', 1, ?]]
    [{3}]        ==  [y, 'barbs', ?, ?]

    +++ KEYS +++
    B, C
    A, B, C
    A, B
    A, C, D

    B: 1,2,2
    C: 2,3,2
    A: 1,1,1
    D: 3

