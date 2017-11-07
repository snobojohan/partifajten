import React from 'react';
import { Component } from 'react'
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { Form, Checkbox } from 'react-form';

let gDisabled = false;
let gValues = [];


class Prio extends Component {

  constructor( props ) {
    super( props );
    this.state = {};
  }

  checkSelf(keyName){
    console.log("!!! checkSelf",keyName,gValues[keyName]);
    return !gValues[keyName];
  }



  handleChange(theForm) {
    console.log(">>>>>>>>>>>>> " + theForm.values,theForm.values);



    let counter = 0;

    Object.keys(theForm.values).map(function(keyName, keyIndex) {
      // use keyName to get current key's name
      // and a[keyName] to get its value
      console.log(keyName,keyIndex,theForm.values[keyName]);
      if(theForm.values[keyName]) {
        counter += 1;
      }

    })

    console.log("/////////////////// ", counter);
    gValues = theForm.values;
    gDisabled = counter >= 3;
    console.log("/////////////////// >>>>", gDisabled);

  }

  render() {
    return (
      <div className="prioPage">

        <h1>Lokala politiska förslag</h1>
        <p className="ntro">Kryssa för max 3 förslag som känns extra viktiga för dig</p>



        <Form formDidUpdate={this.handleChange} onSubmit={submittedValues => this.setState( { submittedValues } )}>

            { formApi => (


              <div>
                <form className="frm"

                 onSubmit={formApi.submitForm}

                 id="form2">


                  <Checkbox field="one" id="one" className="cbox"  disabled={ gDisabled && this.checkSelf('one') }/>
                  <label htmlFor="one" className="lbl">Kraftigt utbyggd tunnelbana</label>

                  <Checkbox field="two" id="two" className="cbox"  disabled={ gDisabled && this.checkSelf('two') }/>
                  <label htmlFor="two" className="lbl">Alla över 85 som vill ska få plats på servicehus</label>

                  <Checkbox field="three" id="three" className="cbox"  disabled={ gDisabled && this.checkSelf('three') }/>
                  <label htmlFor="three" className="lbl">Fler och bättre bibliotek, nya scener och en växande barnkultur</label>

                  <Checkbox field="four" id="four" className="cbox"  disabled={ gDisabled && this.checkSelf('four') }/>
                  <label htmlFor="four" className="lbl">Lys upp utemiljön och ha fler synliga poliser och kameror</label>

                  <Checkbox field="five" id="five" className="cbox" disabled={ gDisabled && this.checkSelf('five') } />
                  <label htmlFor="five" className="lbl">Giftfri stad 2030</label>

                  <Checkbox field="six" id="six" className="cbox" disabled={ gDisabled && this.checkSelf('six') } />
                  <label htmlFor="six" className="lbl">Valfrihet inom skola, barn- och äldreomsorgen</label>

                  <button type="submit" className="btn">Hoppa över</button> <button type="submit" className="btn btn-primary">Skicka</button>
                </form>
              </div>
            )}
          </Form>

      </div>
      );
    }
  }

  export default Prio;
