import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { useGetData } from '../../custom-hooks';
import { serverCalls } from '../../api';
import {
    Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';

import { JojoForm } from '../../components/JojoForm';
import { getAuth } from 'firebase/auth';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1, minWidth: 130 },
    {
        field: 'name',
        headerName: 'Stand',
        width: 150,
        editable: true,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 150,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'attack_type',
        headerName: 'Attack',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
    {
        field: 'max_speed',
        headerName: 'Speed',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
    {
        field: 'ability_type',
        headerName: 'Ability',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
    {
        field: 'weight',
        headerName: 'Weight',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
    {
        field: 'personality',
        headerName: 'Personality',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
    {
        field: 'appearance',
        headerName: 'Appearance',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
    {
        field: 'series',
        headerName: 'Series',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
]



interface gridData {
    data: {
        id?: string;
    }
}

export const DataTable = () => {
    const auth = getAuth()
    let { standData, getData } = useGetData()
    let [open, setOpen] = useState(false)
    let [gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () => {
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
    }

    let deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }

    console.log(gridData) // a list of id's from the checked rows
    if (auth.currentUser) {
        return (
            <div style={{ height: 600, width: '100%' }}>
                <h2>Stand In Our Collection</h2>
                <DataGrid
                    rows={standData}
                    columns={columns}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                    onSelectionModelChange={(newSelectionModel) => { setData(newSelectionModel); }}
                    {...standData}
                />
                <Button onClick={handleOpen}>Update</Button>
                <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Update Stand</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Stand id: {gridData[0]}</DialogContentText>
                        <JojoForm id={`${gridData[0]}`} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">Cancel</Button>
                        <Button onClick={handleClose} color="secondary">Stand</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    } else {
        return(
        <div>
            <h3>Please Sign In to View Your Stand Collection</h3>
        </div>
    )};

}