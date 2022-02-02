import React from "react";
class FindContact extends React.Component {
  render() {
    return (
      <>
        <input onChange={this.props.onChangeInput} />
        {this.props.contacts
          .filter((value) => {
            return value.name.includes(this.props.filter);
          })
          .map((elem) => {
            return (
              <div>
                <p key={elem.id}>
                  name-{elem.name} , phone-{elem.phone}
                </p>
                <button onClick={this.props.onClickDelete(elem)}>delete</button>
              </div>
            );
          })}
      </>
    );
  }
}
export default FindContact;
