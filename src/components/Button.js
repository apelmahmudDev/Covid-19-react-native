import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Button({ text, btnBg, icon }) {
	return (
		<TouchableOpacity style={[styles.button, { backgroundColor: btnBg }]}>
			{icon}
			<Text style={styles.btnText}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		flex: 1,
		height: 48,
		marginVertical: spacing[8],
		alignItems: "center",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		borderRadius: spacing[8],
		paddingHorizontal: 15,
	},
	btnText: {
		fontWeight: "500",
		fontSize: 16,
		color: colors.text.white,
		marginLeft: spacing[2],
	},
});
