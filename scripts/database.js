/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            Id: 1,
            Image: insert,
            Name: Sharkie,
            Species: B. melanopterus,
            Length: 2, 
            Location: "Malay Peninsula",
            Diet: Omnivore
        },
        {
            Id: 2,
            Image: insert,
            Name: Boss,
            Species: B. splendens,
            Length: 3, 
            Location: "Malay Peninsula",
            Diet: Omnivore
        },
        {
            Id: 3,
            Image: insert,
            Name: Bubba,
            Species: B. melanopterus,
            Length: 4, 
            Location: "Rio Negro",
            Diet: Carnivorous
        },
        {
            Id: 4,
            Image: insert,
            Name: Princess,
            Species: P. scalare,
            Length: 5, 
            Location: "Amazon Basin",
            Diet: Omnivore
        },
        {
            Id: 5,
            Image: insert,
            Name: Sara,
            Species: B. melanopterus,
            Length: 2, 
            Location: "Malay Peninsula",
            Diet: Omnivore
        },
        {
            Id: 6,
            Image: insert,
            Name: Gloss,
            Species: B. splendens,
            Length: 3, 
            Location: "Malay Peninsula",
            Diet: Omnivore
        },
        {
            Id: 7,
            Image: insert,
            Name: Bob,
            Species: B. melanopterus,
            Length: 4, 
            Location: "Rio Negro",
            Diet: Carnivorous
        },
        {
            Id: 8,
            Image: insert,
            Name: Prince,
            Species: P. scalare,
            Length: 5, 
            Location: "Amazon Basin",
            Diet: Omnivore
        },
        {
            Id: 9,
            Image: insert,
            Name: Susan,
            Species: B. melanopterus,
            Length: 2, 
            Location: "Malay Peninsula",
            Diet: Omnivore
        },
        {
            Id: 10,
            Image: insert,
            Name: Moss,
            Species: B. splendens,
            Length: 3, 
            Location: "Malay Peninsula",
            Diet: Omnivore
        },
        {
            Id: 11,
            Image: insert,
            Name: Daisy,
            Species: B. melanopterus,
            Length: 4, 
            Location: "Rio Negro",
            Diet: Carnivorous
        },
        {
            Id: 12,
            Image: insert,
            Name: King,
            Species: P. scalare,
            Length: 5, 
            Location: "Amazon Basin",
            Diet: Omnivore
        }, 
        {
            Id: 13,
            Image: insert,
            Name: Sam,
            Species: B. melanopterus,
            Length: 2, 
            Location: "Malay Peninsula",
            Diet: Omnivore
        },
        {
            Id: 14,
            Image: insert,
            Name: Ross,
            Species: B. splendens,
            Length: 3, 
            Location: "Malay Peninsula",
            Diet: Omnivore
        },
        {
            Id: 15,
            Image: insert,
            Name: Billy,
            Species: B. melanopterus,
            Length: 4, 
            Location: "Rio Negro",
            Diet: Carnivorous
        },
        {
            Id: 16,
            Image: insert,
            Name: Queen,
            Species: P. scalare,
            Length: 5, 
            Location: "Amazon Basin",
            Diet: Omnivore
        }
    ]
}


// code from bk for export
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
