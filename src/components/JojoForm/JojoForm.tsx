import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseName } from '../../redux/slices/rootSlices';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface JojoFormProps {
    id?:string;
    data?:{}
}

interface JojoState {
    name: string;
    price: string;
}

export const JojoForm = (props:JojoFormProps) => {

    const dispatch = useDispatch();
    let { standData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<JojoState>(state => state.name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Jojo Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="personality">personality</label>
                    <Input {...register('personality')} name="personality" placeholder="personality"/>
                </div>
                <div>
                    <label htmlFor="attack_type">Attack Type</label>
                    <Input {...register('attack_type')} name="attack_type" placeholder="Attack Type"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="apperance">apperance</label>
                    <Input {...register('apperance')} name="apperance" placeholder="apperance"/>
                </div>
                <div>
                    <label htmlFor="max_speed">Max Speed</label>
                    <Input {...register('max_speed')} name="max_speed" placeholder="Max Speed"/>
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <Input {...register('weight')} name="weight" placeholder="Weight"/>
                </div>
                <div>
                    <label htmlFor="ability_type">Ability_Type</label>
                    <Input {...register('ability_type')} name="ability_type" placeholder="ability_Type"/>
                </div>
                <div>
                    <label htmlFor="series">Series</label>
                    <Input {...register('series')} name="series" placeholder="Series"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}