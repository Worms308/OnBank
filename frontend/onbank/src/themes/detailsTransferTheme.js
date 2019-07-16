import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    detialsTransferBar:{
        width:'100%',
        height:50,
        backgroundColor:'green',
        marginBottom:20,
    },
    detailsTitle:{
        textAlign: 'center',
        color:'#FFF',
        whiteSpace:'nowrap'
    },
    detailsBar:{
        width:'100%',
    },
    detailsTitleReciever:{
        marginLeft:20,
    },
    divString:{
        marginBottom:5,
    },
    string1:{
        marginLeft: 40,
        display:'inline-block',
    },
    string2:{
        float:'right',
        paddingRight:10,
    }

}));