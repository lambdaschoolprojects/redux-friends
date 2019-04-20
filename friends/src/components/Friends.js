import React, { Component } from "react";
import { connect } from "react-redux";

import { getFriends } from "../actions";
import Friend from "./Friend";

class Friends extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    const { friends } = this.props;

    return (
      <div>
        {friends &&
          friends.map(friend => <Friend data={friend} key={friend.id} />)}
      </div>
    );
  }
}

const mapStateToPros = ({
  friendsReducer: { friends, error, isGettingdata }
}) => {
  return { friends, error, isGettingdata };
};

export default connect(
  mapStateToPros,
  { getFriends }
)(Friends);
