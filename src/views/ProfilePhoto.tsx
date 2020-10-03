import {Container} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    img: {
        width: '100%',
        height: '600px',
        objectFit: 'cover',
        objectPosition: '0px -100px'
    }
}));

function ProfilePhoto() {
    const classes = useStyles();
    return (
        <div>
            <img className={classes.img}
                 src="https://lh3.googleusercontent.com/IOKSCKFyyDkZnpjJyUUKdVP8yea2fOBcwol-3OUkstzEoE9uTxSkC1T6g9uBjN7-UsTDQ0QWEvcwUW7EETb4OYEt3wzb4uzSbKBg3R7qOtj5LBg-DY3GvHrcQSRZ6sHuAoijR7TC6dFHeTzgO2VnuWaB50kJwFtWy18-RhFzQvAARMIAHKFZcw0QHvtAYYbwiNRV-u3d-e4nCWVj9jlNJ1FgyPDSinzQJIvhn31eouuWUqWeO9wPXZVnYKtEUd530KhIr6kG6A3xF3sucDnA0nWa9UoUn-f91whYSbQHVBhnttYgqd5zgNIIiOqLsVDhz14wEQoFw_PzeqwzJjtZsBR_V2O7sfvTXUjsj-vqIFlYBGHb0YHhshT9mHMPa4uelZ8xc_j1yXDltHBxRsRWtTAx1Au6ndXHmy4n_ItEABDeT6d1MQbD5UgshUdGiVOuLnFljAupSqwbsllaVgznuSH6Jf9O3EEfqQ5bNQa7jioZ8VScqZeb0NdY-Fv6J1_uKJGjdGK5eN2nZ3yxifp4uuTZQ5LZGqVzpgYKV0RYFK3TzOeHuJ3j8i4wH0xY-_f4hLhlyvLpgl6YDUv9X7fTDsBk29XyzOH7tvB9f_2f0iLnFESaOV_lblc79rM8r88e-dSqs7bPZ8lIc1y-Qfcigm2RUs37i15WxlwWmn1-88vLKzK8zdqxq9cJtyT32-I=w2812-h1874-no?authuser=0"/>
        </div>
    );
}

// @ts-ignore
export default ProfilePhoto;