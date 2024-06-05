import { FaLinkedinIn, FaXTwitter, FaGithub } from 'react-icons/fa6';
import Layout from '../../Components/Layout'
import './styles.css';

function MyAccount() {
  return (
    <Layout>
      <div className='parent mt-10'>
        <div className='card'>
          <div className='glass'></div>
          <div className='content'>
            <span className='title'>By Felipe Murillo</span>
            <span className='text'>To see the code of this project, and everything I do as a developer, please visit my social networks</span>
          </div>
          <div className='bottom'>
            <div className='social-buttons-container'>
              <a 
                className='social-button social-button1'
                href='https://www.linkedin.com/in/felipe-murillov/' 
                target='_blank'
              >
                <FaLinkedinIn className='svg'/>
              </a>

              <a 
                className='social-button social-button2'
                href='https://github.com/afmurillo97' 
                target='_blank'
              >
                <FaGithub className='svg'/>
              </a>

              <a 
                className='social-button social-button3'
                href='https://twitter.com/murilloaf' 
                target='_blank'
              >
                <FaXTwitter className='svg'/>
              </a>
            </div>
            <div className='view-more'></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MyAccount