import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	StatusBar,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { CountrySvg, MenuSvg } from "./src/svg";
import { colors } from "./src/theme/colors";
import { Feather } from "@expo/vector-icons";
import { spacing } from "./src/theme/spacing";
import { FontAwesome } from "@expo/vector-icons";
import Button from "./src/components/Button";
import { Zocial } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />

			<ScrollView>
				<View style={styles.contactSection}>
					{/* menu */}
					<View style={styles.menu}>
						<TouchableOpacity onPress={() => {}}>
							<MenuSvg />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => {}}>
							<Feather name="bell" size={24} color="white" />
						</TouchableOpacity>
					</View>

					{/* covid-19 */}
					<View style={styles.covid19}>
						<Text style={styles.covid19Text}>Covid-19</Text>
						<View style={styles.countryMenu}>
							<CountrySvg />
							<Text style={{ marginLeft: spacing[3] }}>USA</Text>
							<FontAwesome
								style={{ marginLeft: spacing[3] }}
								name="caret-down"
								size={24}
								color="#61688B"
							/>
						</View>
					</View>

					{/* feeling sick */}
					<View style={styles.feelingContainer}>
						<Text style={styles.feelingTitle}>Are you feeling sick?</Text>
						<Text style={styles.feelingDesc}>
							If you feel sick with any of covid-19 symptoms please call or SMS
							us immediately for help.
						</Text>
					</View>

					{/* contact */}
					<View style={styles.contactContainer}>
						<Button
							icon={<Zocial name="call" size={24} color="white" />}
							text="Call Now"
							btnBg={colors.btn.primary}
						/>
						<View style={{ flex: 1.2, marginLeft: spacing[4] }}>
							<Button
								icon={
									<Ionicons name="ios-chatbubble" size={24} color="white" />
								}
								text="Send SMS"
								btnBg={colors.btn.secondary}
							/>
						</View>
					</View>
				</View>

				<View style={styles.preventionSection}></View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.bg.light,
	},
	contactSection: {
		flex: 1,
		padding: spacing[6],
		backgroundColor: colors.bg.primary,
		borderBottomLeftRadius: spacing[8],
		borderBottomRightRadius: spacing[8],
	},
	menu: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: spacing[5],
	},
	covid19: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginVertical: spacing[10],
	},
	covid19Text: {
		color: colors.text.white,
		fontWeight: "600",
		fontSize: 24,
	},
	countryMenu: {
		backgroundColor: colors.bg.light,
		borderRadius: spacing[5],
		padding: spacing[2],
		flexDirection: "row",
		alignItems: "center",
	},
	feelingContainer: {},
	feelingTitle: {
		color: colors.text.white,
		fontWeight: "600",
		fontSize: 20,
		marginBottom: spacing[3],
	},
	feelingDesc: {
		color: colors.text.white,
		fontWeight: "400",
		fontSize: 14,
		opacity: 0.7,
	},
	contactContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	preventionSection: {},
});
