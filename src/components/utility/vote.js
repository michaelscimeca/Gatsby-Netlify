import React from 'react';
import { connect } from 'react-redux';

class Vote extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }
  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <section className="section" data-scroll>
        <div className="relative grid gap-x-32 grid-cols-4 md:grid-cols-8 lg:gap-x-6 lg:grid-cols-12 mx-auto  max-w-7xl gap-y-16 lg:gap-y-32">

          <div className="col-span-full md:col-span-12 2xl:col-span-6 text-left">
            <h2 className="text-ZhenZhuBaiPearl3 text-center inline-block mb-16">REDUX</h2>
            <p className="text-ZhenZhuBaiPearl3 mb-16">React redux connects redux to react components. Redux on its own is just an object state waiting to map state to a react component that gives you a function dispatch and state object.</p>
            <p className="text-ZhenZhuBaiPearl3 mb-16">The Provider Component allows redux to push states to your props for access.</p>
            <p className="text-ZhenZhuBaiPearl3 mb-16">I have created a store.js file in the state folder that handles the data that gets dispatched to it.</p>
            <p className="text-ZhenZhuBaiPearl3 mb-16">You can create components and dispatch effects to the reducer to handle the data and give something back to you and long as you use the connect in react-redux, which provides the dispatch function and passes through props to the components that will affect the data.</p>
          </div>

          <div className="vote-container col-span-full md:col-span-12 2xl:col-span-5 2xl:col-start-8 text-center rounded">
            <div className="h-full justify-center	flex flex-col border-ZhenZhuBaiPearl3 border-solid border-4 p-32 rounded">
              <p className="mb-16 text-ZhenZhuBaiPearl3 uppercase">Redux Example</p>
              <h2 className="text-ZhenZhuBaiPearl3 text-center inline-block mb-16">Vote</h2>
              <div className="block overflow-hidden">
                <button className="bg-ZhenZhuBaiPearl3 hover:bg-IrisEyes text-white font-bold py-8 px-8" onClick={this.decrement}>-</button>
                <span className="bg-ZhenZhuBaiPearl3 hover:bg-IrisEyes text-white font-bold py-1 px-16 mx-1">{this.props.count}</span>
                <button className="bg-ZhenZhuBaiPearl3 hover:bg-IrisEyes text-white font-bold py-8 px-8" onClick={this.increment}>+</button>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}
// Create maps state
function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

// Connect takings in the mapstate
// Higher-order function after called its wraps the counter in that new function or (wrapped) component.
// Merge state store Object to Compontent
export default connect(mapStateToProps)(Vote);
