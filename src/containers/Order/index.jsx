import React, { useContext, Component } from "react";

import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './index.css';
import ProductList from "../../components/ProductList";
import {db} from '../../services/firestore';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import OrderDetail from '../../components/OrderDetail';

export default class Order extends Component {
    static contextType = CartContext

    constructor(props) {
        super(props);
        this.state = {
           loading: false,
           orderId:null,
           date:null,
           cart:[],
           total:0,
           status:'',
           fields:{
               name:'',
               lastName:'',
               phone:'',
               email:'',
               email2:''
           },
           errors:{
            name:'',
            phone:'',
            email:'',
            email2:''
           }
        };
        this.isEmailValid = this.isEmailValid.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidUpdate(prevProps, prevState) {
        if (prevState.orderId !== this.state.orderId) {
            //parar el loading
            this.setState({loading:false})
        }
      }

    isEmailValid(field){
        let lastAtPos = this.state.fields[field].lastIndexOf('@');
        let lastDotPos = this.state.fields[field].lastIndexOf('.');
        let emailIsValid = true;
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.fields[field].indexOf('@@') == -1 && lastDotPos > 2 
        && (this.state.fields[field].length - lastDotPos) > 2)) {
            emailIsValid = false;
        }
        return emailIsValid;
    }

    handleValidation(field){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!field || field === "name"){

        //Name
        if(!fields["name"]){
            formIsValid = false;
            errors["name"] = "No puede estar vacio";
         }
   
         if(typeof fields["name"] !== "undefined"){
            if(!fields["name"].match(/^[a-zA-Z ñÑ]+$/)){
               formIsValid = false;
               errors["name"] = "Solo letras se permiten para el nombre";
            }        
         }
  
        }

        if(!field || field === "lastName"){

            //Name
            if(!fields["lastName"]){
                formIsValid = false;
                errors["lastName"] = "No puede estar vacio";
             }
       
             if(typeof fields["lastName"] !== "undefined"){
                if(!fields["lastName"].match(/^[a-zA-Z ñÑ]+$/)){
                   formIsValid = false;
                   errors["lastName"] = "Solo letras se permiten para el apellido";
                }        
             }
      
            }


        if(!field || field === "email"){
        //Email
        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "no puede estar vacio";
         }

         if(typeof fields["email"] !== "undefined"){
            let isEmailValid = this.isEmailValid("email");
            formIsValid = isEmailValid;
            errors["email"] = isEmailValid ? null : "Email no es valido";
         }
         
         if(fields["email2"] && fields["email"] && fields["email2"] !== fields["email"]){
            formIsValid = false;
            errors["email"] = "emails ingresados son distintos";
        }          
        }

        if(!field || field === "phone"){
            if(!fields["phone"]){
                formIsValid = false;
                errors["phone"] = "no puede estar vacio";
             }
        }




         if(!field || field === "email2"){

            if(!fields["email2"]){
                formIsValid = false;
                errors["email2"] = "no puede estar vacio";
             }         
      
    
            if(typeof fields["email2"] !== "undefined"){
                let isEmailValid = this.isEmailValid("email2");
                formIsValid = isEmailValid;
                errors["email2"] = isEmailValid ? null : "Email no es valido";
             }
            if(fields["email2"] && fields["email"] && fields["email2"] !== fields["email"]){
                formIsValid = false;
                errors["email2"] = "emails ingresados son distintos";
            }          
         }

       this.setState({errors: errors});
       return formIsValid;
   }


    handleSubmit (event) {
        event.preventDefault();
        if(this.handleValidation()){

            let currentdate = new Date();
            let datetime =  currentdate.toLocaleString();
            let date =firebase.firestore.Timestamp.fromDate(currentdate);

            this.setState({loading:true,status:'Generada'})
             db.collection('orders').add({
                buyer: {
                    email: this.state.fields["email"],
                    name: this.state.fields["name"],
                    lastName: this.state.fields["lastName"],
                    phone: this.state.fields["phone"]
                },
                items :  this.state.cart,
                date: date,
                status: this.state.status,
                total: this.state.total
            }).then((result)=>{
                console.log("RESULT",result)
                const [cart, setCart] = this.context
                setCart(curr=>[]);
                this.setState({orderId:result.id,date:datetime})

            }).catch((error)=>{
                console.log("error",error.message)
            })

            //poner un loadingx
            
            //actualizar la pantalla con el numero de orden
            
            //vaciar el carro            
            
            //alert("Form submitted");
         }else{
            alert("El Formulario tiene errores")
         }
    }   
     
    handleChange(field, e){    
        let fields = this.state.fields;

        if(field === 'phone'){
            fields[field] = (e.target.validity.valid) ? e.target.value : this.state.fields["phone"];
        } else {
            fields[field] = e.target.value;        
        }
        this.setState({fields});

        this.handleValidation(field)

    }
    async componentDidMount() {
        const [cart, setCart] = this.context
        let total =  cart.reduce(( accumulator, current) => accumulator + parseFloat(current.price),0);
        this.setState({total:total,cart:cart})
    }

    render(){

        if(this.state.loading){
            return <div>Generado la orden...</div> ;
        }
        return (
            <div>{
                this.state.orderId
                ?<OrderDetail props={this.state} />
                :<div>
                    
                <div className="order-cart-container">
                    <div>
                        Productos:
                    </div>
                    <div>
                    <ProductList/>
                    </div>                    
                </div>
                <div className="order-form-container">
                    <form id='order-form' onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input refs="name" type="text" className="form-control" value={this.state.fields["name"]} onChange={this.handleChange.bind(this, "name")}/>
                        <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Apellidos</label>
                        <input refs="lastName" type="text" className="form-control" value={this.state.fields["lastName"]} onChange={this.handleChange.bind(this, "lastName")}/>
                        <span style={{color: "red"}}>{this.state.errors["lastName"]}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Telefono</label>
                        <input refs="phone" type="text" pattern="[0-9]*" className="form-control"  value={this.state.fields["phone"]} onChange={this.handleChange.bind(this, "phone")}/>
                        <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email </label>
                        <input refs="email" type="email" className="form-control" value={this.state.fields["email"]} onChange={this.handleChange.bind(this, "email")}/>
                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Repita Email</label>
                        <input refs="email2" type="email" className="form-control"  value={this.state.fields["email2"]} onChange={this.handleChange.bind(this, "email2")} />
                        <span style={{color: "red"}}>{this.state.errors["email2"]}</span>
                    </div>
    
                    <Button type="submit" className="btn btn-primary">Comprar</Button>
                    </form>
                </div>  
                </div>
                }

                
            </div>
    
            );
    }

}

  


  

