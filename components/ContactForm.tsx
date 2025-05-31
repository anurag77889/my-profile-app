import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };
    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid Email Address";
      valid = false;
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    Alert.alert("Form submitted");
    setName("");
    setEmail("");
    setMessage("");
    setErrors({ name: "", email: "", message: "" });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      {errors.email ? (
        <Text style={styles.errorText}>{errors.email}</Text>
      ) : null}
      <TextInput
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        style={[styles.input, styles.messageInput]}
        multiline
        numberOfLines={4}
      />
      {errors.message ? (
        <Text style={styles.errorText}>{errors.message}</Text>
      ) : null}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  messageInput: {
    height: 100,
    textAlignVertical: "top",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    marginLeft: 4,
  },
});

export default ContactForm;
