export default function FormsList(){
    const forms = [
        {
            id: 1,
            title: "Enquete sur la satisfaction des clients à l'égard des services de la société",
            description: "Enquete sur la satisfaction des clients à l'égard des services de la société menée par le service de la qualité",
            status: "published",
            created_at: "2021-09-01 12:00:00",
            updated_at: "2021-09-01 12:00:00",
            published_at: "2021-09-01 12:00:00",
            ends_at: "2021-09-01 12:00:00",
            questions: [
                {
                    id: 1,
                    title: "Quel est votre niveau de satisfaction à l'égard de la qualité des services de la société ?",
                    type: "radio",
                    options: [
                        {
                            id: 1,
                            title: "Très satisfait"
                        },
                        {
                            id: 2,
                            title: "Satisfait"
                        },
                        {
                            id: 3,
                            title: "Peu satisfait"
                        },
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Enquete sur la satisfaction des clients à l'égard des services de la société",
            description: "Enquete sur la satisfaction des clients à l'égard des services de la société menée par le service de la qualité",
            status: "published",
            created_at: "2021-09-01 12:00:00",
            updated_at: "2021-09-01 12:00:00",
            published_at: "2021-09-01 12:00:00",
            ends_at: "2021-09-01 12:00:00",
            questions: [
                {
                    id: 1,
                    title: "Quel est votre niveau de satisfaction à l'égard de la qualité des services de la société ?",
                    type: "radio",
                    options: [
                        {
                            id: 1,
                            title: "Très satisfait"
                        },
                        {
                            id: 2,
                            title: "Satisfait"
                        },
                        {
                            id: 3,
                            title: "Peu satisfait"
                        },
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Enquete sur la satisfaction des clients à l'égard des services de la société",
            description: "Enquete sur la satisfaction des clients à l'égard des services de la société menée par le service de la qualité",
            status: "published",
            created_at: "2021-09-01 12:00:00",
            updated_at: "2021-09-01 12:00:00",
            published_at: "2021-09-01 12:00:00",
            ends_at: "2021-09-01 12:00:00",
            questions: [
                {
                    id: 1,
                    title: "Quel est votre niveau de satisfaction à l'égard de la qualité des services de la société ?",
                    type: "radio",
                    options: [
                        {
                            id: 1,
                            title: "Très satisfait"
                        },
                        {
                            id: 2,
                            title: "Satisfait"
                        },
                        {
                            id: 3,
                            title: "Peu satisfait"
                        },
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Enquete sur la satisfaction des clients à l'égard des services de la société",
            description: "Enquete sur la satisfaction des clients à l'égard des services de la société menée par le service de la qualité",
            status: "published",
            created_at: "2021-09-01 12:00:00",
            updated_at: "2021-09-01 12:00:00",
            published_at: "2021-09-01 12:00:00",
            ends_at: "2021-09-01 12:00:00",
            questions: [
                {
                    id: 1,
                    title: "Quel est votre niveau de satisfaction à l'égard de la qualité des services de la société ?",
                    type: "radio",
                    options: [
                        {
                            id: 1,
                            title: "Très satisfait"
                        },
                        {
                            id: 2,
                            title: "Satisfait"
                        },
                        {
                            id: 3,
                            title: "Peu satisfait"
                        },
                    ]
                }
            ]
        },
    ]

    return (
        <div>
           <ul>
               {forms.map((form) => (
                   <li key={form.id}>
                        <div className="border px-2 py-2 my-4 rounded-md shadow">
                            <div className="text-xl">{form.title}</div>
                            <div className="text-sm">{form.description}</div>
                            <div className="text-sm bg-green-100 inline-block py-1 my-2 px-2"> {form.status}</div>
                            <div className="text-sm"> Expires in <span className="bg-red-100 px-2 py-1">11 days</span> </div>

                        </div>
                    </li>
                ))}
           </ul>
        </div>
    )
}