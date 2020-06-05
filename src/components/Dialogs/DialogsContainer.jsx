import React from 'react'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect'
import { connect } from 'react-redux'
import { MainDialog } from './MainDialog'
import { AddText } from '../../redux/dialogs_reducer'


const MapStateToProps = (state) => {
debugger
    return {
        id: state.dialogs.id,
        speakers: state.dialogs.speakers,
        friend: state.dialogs.friend,
        messages: state.dialogs.speakers
    }
}

export default compose(withRouter,connect(MapStateToProps,{AddText}), WithAuthRedirect)(MainDialog)