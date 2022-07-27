import Message from '../layouts/Message'
import {useLocation} from 'react-router-dom' 

function Projects(){
    const location = useLocation()

    let message = ''
    let type = ''

    if(location.state){
        message = location.state.message
        type = location.state.type
    }
    return(
        <div>
            <h1>Meus Projetos</h1>
            {message && <Message msg={message} type={type}/>}
            
        </div>
    )
}

export default Projects