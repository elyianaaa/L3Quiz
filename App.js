import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, ScrollView, TextInput, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const InputBox = ({ label, onChangeText }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} onChangeText={onChangeText} />
        </View>
    );
};

const MyApp = () => {
    const [name, setName] = useState('');
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');

    const correctAnswers = ['Deer', 'Leopard', 'Squirrel', 'Tiger'];

    const handleSubmit = () => {
        let score = 0;
        if (answer1 === correctAnswers[0]) score++;
        if (answer2 === correctAnswers[1]) score++;
        if (answer3 === correctAnswers[2]) score++;
        if (answer4 === correctAnswers[3]) score++;
        Alert.alert(`You got ${score} out of 4 correct!`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Animal Quiz</Text>

            {/* Name Input */}
            <InputBox label="Enter Name:" onChangeText={setName} />

            {/* Question 1 */}
            <View style={styles.questionContainer}>
                <Text style={styles.questionBox}>What animal is this?</Text>
                <Image source={require('./img/deer.jpg')} style={styles.image} />
                <RNPickerSelect
                    onValueChange={setAnswer1}
                    style={pickerSelectStyles}
                    items={[
                        { label: 'Deer', value: 'Deer' },
                        { label: 'Leopard', value: 'Leopard' },
                        { label: 'Squirrel', value: 'Squirrel' },
                        { label: 'Tiger', value: 'Tiger' },
                    ]}
                />
            </View>

            {/* Question 2 */}
            <View style={styles.questionContainer}>
                <Text style={styles.questionBox}>What animal is this?</Text>
                <Image source={require('./img/leopard.jpg')} style={styles.image} />
                <RNPickerSelect
                    onValueChange={setAnswer2}
                    style={pickerSelectStyles}
                    items={[
                        { label: 'Deer', value: 'Deer' },
                        { label: 'Leopard', value: 'Leopard' },
                        { label: 'Squirrel', value: 'Squirrel' },
                        { label: 'Tiger', value: 'Tiger' },
                    ]}
                />
            </View>

            {/* Question 3 */}
            <View style={styles.questionContainer}>
                <Text style={styles.questionBox}>What animal is this?</Text>
                <Image source={require('./img/squirrel.jpg')} style={styles.image} />
                <RNPickerSelect
                    onValueChange={setAnswer3}
                    style={pickerSelectStyles}
                    items={[
                        { label: 'Deer', value: 'Deer' },
                        { label: 'Leopard', value: 'Leopard' },
                        { label: 'Squirrel', value: 'Squirrel' },
                        { label: 'Tiger', value: 'Tiger' },
                    ]}
                />
            </View>

            {/* Question 4 */}
            <View style={styles.questionContainer}>
                <Text style={styles.questionBox}>What animal is this?</Text>
                <Image source={require('./img/tiger.jpg')} style={styles.image} />
                <RNPickerSelect
                    onValueChange={setAnswer4}
                    style={pickerSelectStyles}
                    items={[
                        { label: 'Deer', value: 'Deer' },
                        { label: 'Leopard', value: 'Leopard' },
                        { label: 'Squirrel', value: 'Squirrel' },
                        { label: 'Tiger', value: 'Tiger' },
                    ]}
                />
            </View>

            {/* Submit Button */}
            <View style={styles.buttonContainer}>
                <Button title="Submit Answers" onPress={handleSubmit} color="#4682B4" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#add8e6',
    },
    questionContainer: {
        marginBottom: 20,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#d3d3d3',
        borderWidth: 1
    },
    questionBox: {
        backgroundColor: '#ffeb3b',
        padding: 10,
        borderRadius: 8,
        fontSize: 18,
        fontWeight: '600',
        color: '#444',
        marginBottom: 10,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 20,
        borderRadius: 5,
    },
});

const pickerSelectStyles = {
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#add8e6',
        borderRadius: 5,
        backgroundColor: '#fff',
        color: '#333',
        paddingRight: 30,
    },
};

export default MyApp;





