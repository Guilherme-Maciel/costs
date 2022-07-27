import { useHistory } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){
    //Permite fazer redirects no sistema
    const history = useHistory()

    //método responsável por criar um novo projeto e recebe um objeto de projeto como parâmetro.
    function createPost(project){
        //intialize cost and services
        project.cost = 0
        project.services = []

        
        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        }).then(
            (resp) => resp.json()
        )
        .then(
            (data) => {
                console.log(data)
                //redirect
                history.push('/projects', {message: 'Projeto implementado com sucesso!', type: 'success'})
            }
        )
        .catch(
            err => console.log(err)
        )

    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}

export default NewProject