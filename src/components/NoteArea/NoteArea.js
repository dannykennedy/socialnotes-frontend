import React, {Fragment} from 'react'
import NoteList from "../NoteList/NoteList";
import TextArea from "../TextArea/TextArea";

class NoteArea extends React.Component {

    state = {
        notes: [],
        loading: false
    };

    static getDerivedStateFromProps(nextProps, prevState){

        if(nextProps.notes!==prevState.notes){
            return { notes: nextProps.notes};
        }
        else return null;
    }


    render() {

        const { notes } = this.props;
        const { groups } = this.props;
        const { updateHandler } = this.props;
        const { userName } = this.props;
        const { currentGroup } = this.props;
        const { currentUserId } = this.props;
        // console.log("current group", currentGroup);
        // console.log("current UserId", currentUserId);
        // console.log("current group props ", this.props.currentGroup);
        // console.log("current UserId props ", this.props.currentUserId);
        //
        // console.log("truth?" + this.props.personalGroup == this.props.currentGroup);


        return (
            <Fragment>
                {/*Only show the note taking area on personal page*/}
                {this.props.personalGroup == this.props.currentGroup
                    ?
                    <TextArea updateHandler={updateHandler} currentGroup={this.props.currentGroup}
                              currentUserId={this.props.currentUserId}/>
                    : <div style={{height:'10px'}}/>
                }
                <NoteList notes={notes} updateHandler={updateHandler} groups={groups} userName={userName} currentGroup = {this.props.currentGroup} currentUserId={this.props.currentUserId} getGroups={this.props.getGroups}/>
            </Fragment>
        )
    }
}


export default NoteArea
