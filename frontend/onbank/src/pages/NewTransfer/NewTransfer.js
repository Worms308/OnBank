import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      height:"90%",
      paddingTop:20,
    },

    typographyText:{
        marginLeft:'30%',
        whiteSpace: 'nowrap'
    },
    textField:{
        marginLeft:'30%',
        marginTop:0,
        width:'30%',
        marginBottom:'2%',
        whiteSpace: 'nowrap'
    },
    textFieldAmount:{
        marginLeft:'30%',
        marginTop:0,
        width:'10%',
        marginBottom:'2%',
        whiteSpace: 'nowrap',
        display:'inline-block',
    },
    textPLN:{
        marginLeft:'1%',
        display:'inline-block',
        fontSize:15,
    },
    radioButtonTextElixir:{
         marginLeft:'31%',
         display:'inline-block'
    },
    radioButtonText:{
        marginLeft:'3%',
        display:'inline-block'
   },
    radioButton1:{
        marginLeft:'30%',
        display:'inline-block'
    },
    radioButton2:{
        marginLeft:'6%',
    },
    button:{
       // float:"right",
        marginBottom:'5%',
        marginLeft:'70%'

    }
  }));

export default function NewTransfer()
{
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
      });
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };
      function handleChangeRadio(event) {
        setSelectedValue(event.target.value);
      }

   
    return(
       <Paper className={classes.root}>
        
            <TextField
            id="standard-name"
            label="Odbiorca"
            className={classes.textField}
            onChange={handleChange('name')}
           
        />
        
            <TextField
            id="standard-name"
            label="Nr konta"
            className={classes.textField}
            onChange={handleChange('name')}
           
        />
         
            <TextField
            id="standard-name"
            label="Tytulem przelewu"
            className={classes.textField}
            onChange={handleChange('name')}
           
        />
        <Typography variant="subtitle1" className={classes.typographyText}>Kwota:</Typography>
            <TextField
            id="standard-name"
            label="Podaj kwotę"
            className={classes.textFieldAmount}
            onChange={handleChange('name')}
           
        />
        <h4 className={classes.textPLN}>PLN</h4>
            <TextField
                id="date"
                label="Data przelewu"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
            }}
        />
        <h4 className={classes.typographyText}>Typ przelewu</h4>
        <h5 className={classes.radioButtonTextElixir}>Elixir</h5>
        <h5 className={classes.radioButtonText}>Przelew natychmiastowy</h5>
        <br/>
            <Radio
            checked={selectedValue === 'a'}
            onChange={handleChangeRadio}
            value="a"
            className={classes.radioButton1}
            color="default"
            />
           
        <Radio
            checked={selectedValue === 'b'}
            onChange={handleChangeRadio}
            value="b"
            name="radio-button-demo"
            color="default"
            className={classes.radioButton2}
         />
         <br/>
         <Button variant="contained" color="primary" className={classes.button}>
            Wyślij
         </Button>
       </Paper>
    )
}