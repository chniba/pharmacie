import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Singup extends Component {
    state = {  }
    render() { 
        return (
            <>
                <div className="fullsheet">
                    <div className="auth-form sing_up">
                        <div className="avatar"></div>
                        <h4 className="modal-title">Creer un compte</h4>
                        <form>
                           
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    ref="your_name"
                                    name="your_name"
                                    placeholder="Nom"
                                    required
                                />
                                {/* <small className="text-danger">{this.state.your_name}</small> */}
                            </div>
                            <div className="form-group">
                                <input type="email"
                                    className="form-control"
                                    ref="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                                {/* <small className="text-danger">{this.state.email}</small> */}
                            </div>
                            <div className="form-group">
                                <input type="password"
                                    className="form-control"
                                    ref="password"
                                    name="password"
                                    placeholder="Mot de passe"
                                    required
                                />
                                {/* <small className="text-danger">{this.state.password}</small> */}
                            </div>
                            <div className="form-group">
                                <input type="password"
                                    className="form-control"
                                    ref="password2"
                                    name="password2"
                                    placeholder="Confirmer le mot de passe"
                                    required
                                />
                                {/* <small className="text-danger">{this.state.password2}</small> */}
                            </div>
                            <button className="btn btn-primary btn-block btn-lg form-control mb-3">S'inscrire</button>
                        </form>
                        <div className="text-center small text-dark">Avez-vous un compte? <Link to='/'>Connecter</Link></div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Singup;
