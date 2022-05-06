import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { notificationToday, notificationYesterday } from "../../Data";

const NotificationScreen = () => {
  const [close, setClose] = useState(false);
  const [id, setId] = useState(false);
  const [id_ytd, setIdYtd] = useState(false);
  const [close_ytd, setCloseYtd] = useState(false);
  const [click, setClick] = useState(false);
  const [click_ytd, setClickYtd] = useState(false);
  const [click_delete, setClickDelete] = useState(false);
  const onClick = (index) => {
    setClose(!close);
    setId(index);
  };
  const onClickYtd = (index) => {
    setCloseYtd(!close_ytd);
    setIdYtd(index);
  };
  const onDelete = () => {
    setClick(!click);
  };
  const ondelete = (index) => {
    setClickYtd(!click_ytd);
    setClickDelete(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Notification</Text>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Today</Text>
        {notificationToday.map((item) => (
          <View style={styles.title_close}>
            {item.heading && (
              <View
                style={{
                  position: "relative",
                  display: click ? "none" : "block",
                }}
              >
                {item.content.map((item, index) => (
                  <TouchableOpacity
                    onPress={(e) => onClick(index)}
                    style={styles.box}
                    key={item.id}
                  >
                    <View style={styles.left}>
                      <Text style={styles.text}>{item.title}</Text>
                      <Text style={styles.clock}>{item.time}</Text>
                      
                    </View>
                    {close && index == id && (
                      <TouchableOpacity
                        style={styles.close_btn}
                        onPress={(e) => onDelete(click)}
                      >
                        X
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        ))}
        <Text style={styles.title_bottom}>Yesterday</Text>
        {notificationYesterday.map((item,index) => (
          <View style={styles.title_close}>
            {item.bottom && (
              <View
                style={{
                  position: "relative",
                  display: click_ytd && click_delete==index ? "none" : "block",
                }}
              >
                {item.main.map((item, index) => (
                  <TouchableOpacity
                    onPress={(e) => onClickYtd(index)}
                    style={styles.box}
                    key={item.id}
                  >
                    <View style={styles.left}>
                      <Text style={styles.text}>{item.title}</Text>
                      <Text style={styles.clock}>{item.time}</Text>
                    </View>
                    {close_ytd && index == id_ytd && (
                      <TouchableOpacity
                        style={styles.close_btn}
                        onPress={(e) => ondelete(index)}
                      >
                        X
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.clear}>Clear All</TouchableOpacity>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f6f8",
    flex: 1,
  },
  header: {
    backgroundColor: "white",
  },
  heading: {
    textAlign: "center",
    padding: 10,
    fontWeight: 600,
  },
  content: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 8,
    paddingBottom: 15,
  },
  box: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "98vw",
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.502)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontWeight: 700,
    fontSize: 16,
    fontFamily: "sans-serif",
  },
  title_bottom: {
    fontWeight: 700,
    fontSize: 16,
    fontFamily: "sans-serif",
    marginTop: 15,
  },
  text: {
    fontWeight: 500,
  },
  clock: {
    color: "#308bf6",
    fontSize: 12,
    marginTop: 5,
  },
  clear: {
    color: "#308bf6",
    fontWeight: 500,
    textAlign: "center",
    marginTop: 20,
    paddingBottom: 20,
    fontFamily: "sans-serif",
    backgroundColor: "rgba(255,255,255,0)",
  },

  close_btn: {
    backgroundColor: "#f33456",
    position: "absolute",
    right: 0,
    top: 0,
    paddingVertical: 25.5,
    paddingHorizontal: 17,
    width: 10,
    color: "white",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
  },
  title_close: {},
});
