import React from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

class Comentarios extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            comentarios: [],
            dataSource: '',
        };

        this.DeleteComment = this.DeleteComment.bind(this);
    }

    AddComment() {
        if (this.state.text != '') {
            this.state.comentarios[this.state.comentarios.length] = this.state.text
            console.log(this.state.comentarios)
            this.setState({ text: '' });
        }
    }

    DeleteComment(comentario) {

        let comentarios = this.state.comentarios
        nuevoscomentarios = comentarios.filter(comment => {
            return comment != comentario
        })
        this.setState({ comentarios: nuevoscomentarios })
        console.log(this.state.comentarios)
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TextInput
                        style={styles.input}
                        onChangeText={
                            (text) => this.setState({ text })}
                        value={this.state.text}>
                    </TextInput>

                    <TouchableHighlight
                        style={styles.button}
                        onPress={
                            () => this.AddComment()} >
                        <Text style={styles.textButton}>Comment</Text>
                    </TouchableHighlight>
                </View>

                <View>
                    {this.state.comentarios.map((comentario, index) => {
                        return (
                            <View key={index}>
                                <Text>{comentario}</Text>
                                <TouchableHighlight
                                    style={styles.button}
                                    onPress={
                                        () => this.DeleteComment(comentario)} >
                                    <Text style={styles.textButton}>Delete</Text>
                                </TouchableHighlight>
                            </View>
                        )
                    })}
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    header: {
        flexDirection: 'row',
    },
    input: {
        marginLeft: 10,
        marginTop: 10,
        width: 250,
        height: 40,
        borderColor: 'green',
        borderWidth: 1
    },
    button: {
        alignItems: 'center',
        width: 70,
        height: 40,
        backgroundColor: 'green',
        borderRadius: 4,
        marginLeft: 10,
        marginTop: 10
    },
    textButton: {
        marginTop: 10,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 350,
        height: 70,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    buttonItem: {
        alignItems: 'center',
        width: 70,
        height: 40,
        backgroundColor: '#FF7979',
        borderRadius: 2,
        marginLeft: 10,
    },
    textItem: {
        marginLeft: 30,
    }
});
export default Comentarios;