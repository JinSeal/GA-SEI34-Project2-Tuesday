import React, { useState} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

let URL = (model, id = '') => `https://tuesday-server.herokuapp.com/${model}/${id}`

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


export default function GroupNameField(props) {

  const [groupName, setGroupName] = useState(props.groupName);
  const classes = useStyles();
  const updateGroupName = () => {
      axios.put(URL(`groups`, props.id), { name: groupName })
  }


  return (
      <input
          onChange={(event) => setGroupName(event.target.value)}
          onBlur={updateGroupName}
          value={groupName}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          style={{color: props.color, fontSize: '28px', fontWeight:'bold', width:'100%'}}
      />
  )
}
