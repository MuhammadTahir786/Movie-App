import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { styles } from "./style"
import Ionicons from "react-native-vector-icons/Ionicons"
import { storage } from '../../components/storage'
import { AuthContext } from '../../context/authContext'
import { Colors } from '../../assets/color'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(true)
    const [validation, setValidation] = useState({ email: "", password: "" })
    const { LoginFunction } = useContext(AuthContext)


    const Submit = () => {
        try {
            const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            if (email == "") {
                setValidation({ ...validation, email: "Email is required*" })
            } else if (!emailRegex.test(email)) {
                setValidation({ ...validation, email: "Invalid Email Id*" })
            }
            else if (password == "") {
                setValidation({ ...validation, password: "Password is required*" })
            }
            else if (!passwordRegex.test(password)) {
                setValidation({ ...validation, password: "Password should be 6-16 characters long, with at least one digit and one special character*" })
            }
            else {
                LoginFunction(email)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Movie App</Text>
            <View style={styles.inputContainer}>
                <Ionicons name="mail" size={20} color={Colors.text} />
                <TextInput
                    placeholder='Email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={(text) => { setEmail(text), setValidation({ ...validation, email: "" }) }}
                    style={styles.input}
                />
            </View>
            <Text style={styles.error}>{validation.email}</Text>
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed" size={20} color={Colors.text} />
                <TextInput
                    placeholder='Password'
                    autoCapitalize='none'
                    secureTextEntry={visible}
                    value={password}
                    onChangeText={(text) => { setPassword(text), setValidation({ ...validation, password: "" }) }}
                    style={styles.input}
                />
                <TouchableOpacity onPress={() => setVisible(!visible)} >
                    <Ionicons name={visible ? "eye" : "eye-off"} size={20} color={Colors.text} />
                </TouchableOpacity>
            </View>
            <Text style={styles.error}>{validation.password}</Text>
            <TouchableOpacity onPress={() => { Submit() }} style={styles.btn}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Login