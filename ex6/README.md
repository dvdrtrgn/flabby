### ex6—geometric encapsulation

* send two object properties to a function to calc collision
* send a point in space to an object and ask if it is there



####

    object {
        x, y, width, height
    }
        function collides(a, b) {
          return a.x < b.x + b.width &&
                 a.x + a.width > b.x &&
                 a.y < b.y + b.height &&
                 a.y + a.height > b.y;
        }


    send a point in space to an object and ask if it is there
    object.check(point){

    }
    object {origin, mass, check()}

    Trio [x,y,z]
    point:Trio // origin
    sizes:Trio // mass
    transform([trio])
    offset(trio)
    origin(vec)
    history(stack)



    point (x,y,z,[t])
    square(x,y,[z,[t]])
    square(x,w,y,h,[z,d,[t1,t2]])

    POINT BASED
    x,y :origin
    w,h :area
    w,h,d :volume

    where in an object is the origin
    -anywhere withing the bounds
    then is the center the natural answer?
    center is a function of [w,h,d]/2


    SPAN BASED
    x1,x2 : width
    y1,y2 : height
    z1,z2 : depth
    t1,t2 : (duration)endurance

    1...n-1 : undefined = infinite
    all undefined : skip?

    cube(x,y,z,[t])


    coordinate vectors (point only)
        x,y / x,y,z / x,y,x,t
    area vectors (no place in space)
        w,h / w,h,d / w,h,d,e


         |        +---+---+
         |        |   -   |
         |        + - + - +
         |        |   -   |
         |        +---+---+
         |_ _ _ _ _ _ _ _ _ _ _ _ _
        0,0


