import React, { Component } from 'react'
import home from './home.jpeg'
import LanguageIcon from '@material-ui/icons/Language';
import FilterListIcon from '@material-ui/icons/FilterList';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import {Helmet} from 'react-helmet';
import {Row,Col} from 'react-bootstrap';
export default class Home extends Component {
    render() {
        return (
            <div className="main">
                <Helmet>
                <style>{'body {background-image: url("https://images.unsplash.com/photo-1501183638710-841dd1904471?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");height: 100%;background-repeat: no-repeat;background-size: cover;}'}</style>
            </Helmet>
                    <div className="heading">
                        <h3>Get the latest on our COVID-19 response</h3>
                    </div>
                        
                        <Row>
                            <Col><div className="side">
                            <div>
                                <b>Switch to hosting</b>
                            </div>
                            <div><LanguageIcon style={{ marginLeft: 10 }} /></div>
                            <div style={{ backgroundColor: 'white', borderRadius: 25, marginLeft: 10 }}>
                                <FilterListIcon style={{ margin: 5 }} /><AccountCircleIcon style={{ margin: 5 }} />
                            </div>
                        </div></Col>
                        </Row>
               
                    
                    <div className="center">
                        <Row>
                        <Col><div style={{ textAlign: 'center' }}>
                            <a href="#"><b><span style={{ color: 'whitesmoke'}}>Place to stay</span></b></a>
                        </div>
                        <div className="search">
                        <Row>
                                {/* <Col xs={1} style={{marginLeft:20}}></Col> */}
                                <Col xs={3} style={{display:'flex',alignItems:'center',borderRight:'2px solid grey'}} className='col' >Location Where are you going</Col>
                                <Col xs={2} style={{display:'flex',alignItems:'center',borderRight:'2px solid grey'}} className='col'>Check in Adds dates</Col>
                                <Col xs={3} style={{display:'flex',alignItems:'center',borderRight:'2px solid grey'}} className='col'>Check out Add dates</Col>
                                <Col xs={3} style={{display:'flex',alignItems:'center'}} className='col'>Guests Add guests <SearchIcon style={{marginLeft:20,backgroundColor:"purple",borderRadius:'50%',color:'white',height:40,width:40}}/></Col>
                                
                        </Row>   
                        </div></Col>
                        </Row>
                    </div>
                    <Row>
                        <Col style={{marginLeft:60}}>
                            <div>
                                <div><span className='textstyle' >Go</span></div>
                                <div style={{marginTop:'-35px'}}><span className='textstyle' >Near</span></div>
                                <div style={{backgroundColor:'white',borderRadius:15,width:170,textAlign:'center',marginTop:'-10px'}}><span style={{margin:10,fontSize:12}}>Explore nearby stays</span></div>
                            </div>
                        </Col>
                    </Row>

            </div>
        )
    }
}
