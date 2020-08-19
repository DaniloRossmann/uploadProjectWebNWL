const Database = require('./db.js')
const createProffy = require('./createProffy')


Database.then( async (db) => {
    //Inserir dados
    proffyValue = {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "9999888866", 
        bio: "Entusiasta das melhores tecnologias de química avançada. <br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explorações",
        
    }

    classValue = {
        subject: 1, 
        cost: "20", 
        //proffy id vira do banco de dados
        
    }

    classScheduleValues = [ 
        //classa_id vira pelo banco de dados
        {
            weekday: 1, 
            time_from: 750, 
            time_to: 1125
        },
        {
            weekday: 0, 
            time_from: 720, 
            time_to: 1220
        } 
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar dados

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    const selectedClassesProffys = await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes 
        ON (proffys.id = classes.proffy_id)
        WHERE classes.proffy_id = 1; 
    `)

    //console.log(selectedClassesProffys)

    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "720"
        AND class_schedule.time_to > "1300"

    `)
    
    console.log(selectClassesSchedule)
    
})