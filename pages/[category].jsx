import { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card, Text, Grid, Pagination } from '@mantine/core'
import Link from 'next/link';

const complaints = [
    { key: 1},
    { key: 2},
    { key: 3},
    { key: 4},
    { key: 5},
    { key: 6},
    { key: 7},
    { key: 8},
    { key: 9},
    { key: 10},
    { key: 11},
    { key: 12},
    { key: 13},
    { key: 14},
    { key: 15},
    { key: 16},
    { key: 17},
    { key: 18},
    { key: 19},
    { key: 20},
    { key: 21},
    { key: 22},
    { key: 23},
    { key: 24},
    { key: 25},
    { key: 26},
    { key: 27},
    { key: 28},
    { key: 29}
];

const FilteredPage = () => {
    const router = useRouter();
    const { catagory } = router.query;
    return (
        <>
        <Text style={{margin:"40px"}} weight={500} size="lg" mt="md">Health and Hygiene</Text>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Grid style={{ width: "90vw"}} gutter={20} justify="center">

                {complaints.map((a) => {

                    return (
                        <Grid.Col xs={8} sm={7} md={6} lg={4}>
                            <Link href="">
                                <Card
                                    className="comptype"
                                    shadow="sm"
                                    p="xl"
                                    style={{padding: "2vmin", aspectRatio:" 2 / 1" }}
                                >
                                    <Text size="sm" color="dimmed" align="right">27/11/2001</Text>
                                    <Text weight={500} size="lg" mt="md">
                                        You've won. compiled successfully in 232 ms (663 modules).
                                    </Text>
                                </Card>
                            </Link>
                        </Grid.Col>
                    )
                })}

            </Grid>
            <Pagination style={{margin:"5vmin 0"}} total={10} color="gray" radius="md" />

        </div></>
    )
}

export default FilteredPage