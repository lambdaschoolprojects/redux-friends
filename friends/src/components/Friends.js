import React, { Component } from "react";
import { connect } from "react-redux";

import { getFriends } from "../actions";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

class Friends extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    const { friends, error, isGettingData } = this.props;

    return (
      <div>
        <FriendForm />
        {isGettingData && <h2>Loading friends</h2>}
        {error && <h2>Something went wrong</h2>}
        {friends &&
          friends.map(friend => <Friend data={friend} key={friend.id} />)}
      </div>
    );
  }
}

const mapStateToPros = ({
  friendsReducer: { friends, error, isGettingData }
}) => {
  return { friends, error, isGettingData };
};

export default connect(
  mapStateToPros,
  { getFriends }
)(Friends);
