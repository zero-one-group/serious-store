import React from 'react'
import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    makeStyles, 
    Typography, 
    DialogContentText, 
} from '@material-ui/core';
import { Stack, Button, Box, TextField } from '@mui/material';
import CloseIcon from '@material-ui/icons/Close';

// const [open, setOpen] = React.useState(false);

// const handleClickOpen = () => {
// setOpen(true);
// };

// const handleClose = () => {
// setOpen(false);
// };

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))


function UserPopup(props) {
    const { open, setOpenPopup } = props;
    const classes = useStyles();
    return (
        <Dialog open={open} onClose={()=>{setOpenPopup(false)}}>
            <DialogTitle>
                <div style={{ display: 'flex' }}>
                     <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                         Users
                     </Typography>
                     <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                         <Button
                            color="secondary"
                            onClick={()=>{setOpenPopup(false)}}
                        >
                            <CloseIcon />
                        </Button>
                    </Stack>
                </div>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

export default UserPopup;
