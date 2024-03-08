'use client'

import React, { ChangeEvent, useEffect, useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Switch, Tag, Typography } from 'antd';


type teamType = {
    playerName: string;
    bgmiID: string;
    bgmiName: string;
    mobileNumber: string;
};


const App: React.FC = () => {
    const [isLeader, setIsLeader] = useState(false)
    const [playerCounter, setPlayerCounter] = useState(1)
    const [team, setTeam] = useState<Array<teamType>>([])
    const [playerDetails, setPlayerDetails] = useState({
        playerName: "",
        bgmiID: "",
        bgmiName: "",
        mobileNumber: ""
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPlayerDetails((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        console.log(playerDetails)
    }

    useEffect(() => {
        console.log(team)
        console.log(playerCounter)
        // console.log(isLeader)

    })


    const updateTeam = () => {
        setTeam(prevState => ([...prevState, playerDetails]))
        console.log(team);
        setPlayerDetails({
            playerName: '',
            bgmiID: '',
            bgmiName: '',
            mobileNumber: ''
        });

    }

    return (
        <div className='text-white'>
            <Typography.Title level={3}>Player Form</Typography.Title>
            <form className='w-1/2 bg-red-200 text-white'>

                {Array.from({ length: playerCounter }).map((_, index) => (
                    <div key={index}>
                        <Input name={`playerName`} size='large' placeholder='Player Name' onChange={e => handleInputChange(e)} />
                        <Input name={`bgmiID`} size='large' placeholder='BGMI ID' onChange={e => handleInputChange(e)} />
                        <Input name={`bgmiName`} size='large' placeholder='BGMI Name' onChange={e => handleInputChange(e)} />
                        <Input name={`mobileNumber`} className='w-full' max={10} size='large' placeholder='Mobile No.' onChange={e => handleInputChange(e)} />
                        {isLeader &&
                            <Switch className='bg-black' value={isLeader} checkedChildren="Leader" onChange={() => setIsLeader(!isLeader)} />
                        }
                    </div>
                ))}
                <Button onClick={updateTeam}>Add Member</Button>
            </form>

            <Button size='middle' className='text-white' onClick={() => setPlayerCounter(playerCounter + 1)}>Add New Member</Button>

            <div>
                <Typography.Title level={5}>Player Details</Typography.Title>
                {team.length === 0 ?
                    <div>{team.length} members</div> :
                    <div>
                        <Typography.Text>{team.length} member</Typography.Text>
                        <Tag color="green">Team Leader</Tag>
                        {/* {team.map((player, key) => (
                            <div key={key}>{player}</div>
                        ))} */}
                    </div>
                }
            </div>
        </div>
    )
};

export default App;