export default function Congratulations({name}){
    return (
        <>
            <h1 style={{
                color: 'green',
                fontSize: '2em'
            }}>
                Congratulations {name}!
            </h1>
            <p>
                You have successfully created a new Vite + React project.
            </p>
            <p>
                You can now start building your application.
            </p>
        </>
    )
}