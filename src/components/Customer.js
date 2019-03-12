import React from 'react';

class Customer extends React.Component {
    render() {
        return(
            /*
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
            */
           <div>
               <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
               <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
           </div>
        );
    }
}

//Customer 정보를 Customerprofile과 Info로 나누어 출력
class CustomerProfile extends React.Component {
    //Customer의 id 와 image를 randering하는 부분
    render() {
        return(
            <div>
                <image src={this.props.image} alt="pfofile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        );
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        );
    }
}

export default Customer;