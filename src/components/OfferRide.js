const database = require('./../helpers/firebase.js');

import React, { Component } from 'react';
let dateFormat = require('dateformat');



class OfferRide extends Component {

    state = {
        date:dateFormat(new Date(), "yyyy/mm/dd"),
        time:'6:00 AM',
        destination:'Downtown',
        maxSeats:1,
        notes:''
    }

    handleChange = (event) => {
        const { name,value } = event.target;
        this.setState({
            [name]:value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        let id = Object.keys(this.props.trips).length;
        this.props.addTrip({
            date:this.state.date,
            time:this.state.time,
            driver:this.props.username,
            destination:this.state.destination,
            maxSeats:this.state.maxSeats,
            passengers:[],
            notes:this.state.notes,
            id
        })

        database.addNewTrip({
            date:this.state.date,
            time:this.state.time,
            driver:this.props.username,
            destination:this.state.destination,
            maxSeats:this.state.maxSeats,
            passengers:[],
            notes:this.state.notes,
            id
        })

        this.setState(
            {
                date:dateFormat(new Date(), "yyyy/mm/dd"),
                time:'6:00 AM',
                destination:'Downtown',
                maxSeats:1,
                notes:''
            }
        )
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="small-12 columns">
                        <label>Date</label>
                        <input className="small-9 medium-4 large-3 xlarge-2 column" type='date' value={this.state.date} name='date' onChange={this.handleChange}/>
                    </div>
                </div>
                <form id='offer_form' onSubmit={this.handleSubmit}>
                    <hr />
                    <div className="row">
                        <div className="small-4 columns">
                            <label>Destination</label>
                            <select name='destination' value={this.state.destination} onChange={this.handleChange}>
                                <option value='Downtown'>Downtown</option>
                                <option value='Franklin'>Franklin</option>
                            </select>
                        </div>
                        <div className="small-4 columns">
                            <label>Departure Time</label>
                            <select name='time' value={this.state.time} onChange={this.handleChange}>
                                <option value='6:00 AM'>6:00 AM</option>
                                <option value='6:30 AM'>6:30 AM</option>
                                <option value='7:00 AM'>7:00 AM</option>
                                <option value='7:30 AM'>7:30 AM</option>
                                <option value='8:00 AM'>8:00 AM</option>
                                <option value='8:30 AM'>8:30 AM</option>
                                <option value='9:00 AM'>9:00 AM</option>
                                <option value='9:30 AM'>9:30 AM</option>
                                <option value='10:00 AM'>10:00 AM</option>
                                <option value='10:30 AM'>10:30 AM</option>
                                <option value='11:00 AM'>11:00 AM</option>
                                <option value='11:30 AM'>11:30 AM</option>
                                <option value='12:00 PM'>12:00 AM</option>
                                <option value='12:30 PM'>12:30 AM</option>
                                <option value='1:00 PM'>1:00 PM</option>
                                <option value='1:30 PM'>1:30 PM</option>
                                <option value='2:00 PM'>2:00 PM</option>
                                <option value='2:30 PM'>2:30 PM</option>
                                <option value='3:00 PM'>3:00 PM</option>
                                <option value='3:30 PM'>3:30 PM</option>
                                <option value='4:00 PM'>4:00 PM</option>
                                <option value='4:30 PM'>4:30 PM</option>
                                <option value='5:00 PM'>5:00 PM</option>
                                <option value='5:30 PM'>5:30 PM</option>
                                <option value='6:00 PM'>6:00 PM</option>
                            </select>
                        </div>
                        <div className="small-4 columns">
                            <label>Open Seats</label>
                            <select name='maxSeats' value={this.state.maxSeats} onChange={this.handleChange}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                    </div>
                    <div className="row">
                        <div className="small-12 columns">
                            <textarea name='notes' value={this.state.notes} onChange={this.handleChange} placeholder='Add notes here...'></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="small-3 columns">
                            <button>Submit</button>
                        </div>
                    </div>
                    <hr />
                </form>
            </div>
        );
    }
}
export default OfferRide;