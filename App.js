import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './HomeScreen';
import AppWithVideoPlayer from './AppWithVideoPlayer';
import AppWithoutVideoPlayer from './AppWithoutVideoPlayer';

const Stack = createNativeStackNavigator();

const App = () => {
  const inputTimes = [
    //Intro
    ['00:05:300', '00:05:380'],
    // "Let's come together"
    ['00:06:610', '00:06:730'],
    ['00:07:255', '00:07:350'],
    ['00:07:400', '00:07:575'],
    ['00:07:600', '00:08:000'],

    // "It's now or never"
    ['00:11:060', '00:11:250'],
    ['00:11:360', '00:11:550'],
    ['00:11:670', '00:11:820'],
    ['00:11:890', '00:12:040'],
    ['00:12:100', '00:12:500'],

    // "I love you all"
    ['00:13:805', '00:13:880'],
    ['00:13:950', '00:14:000'],
    ['00:14:255', '00:14:330'],
    ['00:14:410', '00:14:610'],

    // Boom
    ['00:17:320', '00:17:390'],
    
    // Beats
    ['00:23:300', '00:23:440'],
    ['00:23:490', '00:23:630'],
    ['00:23:850', '00:23:990'],
    ['00:24:230', '00:24:370'],
    ['00:24:600', '00:24:740'],
    ['00:24:990', '00:25:130'],
    ['00:25:350', '00:25:490'],
    ['00:25:730', '00:25:870'],
    ['00:26:100', '00:26:240'],
    ['00:26:490', '00:26:630'],
    ['00:26:850', '00:26:990'],
    ['00:27:230', '00:27:370'],
    ['00:27:600', '00:27:740'],

    // More Beats
    ['00:29:670', '00:29:710'],
    ['00:30:045', '00:30:085'],
    ['00:30:420', '00:30:460'],
    ['00:30:795', '00:30:835'],
    ['00:31:170', '00:31:210'],
    ['00:31:545', '00:31:585'],

    //fast
    ['00:31:920', '00:31:960'],
    ['00:32:105', '00:32:145'],
    ['00:32:295', '00:32:335'],

    //normal
    ['00:32:670', '00:32:710'],
    ['00:33:045', '00:33:085'],
    ['00:33:420', '00:33:460'],
    ['00:33:795', '00:33:835'],
    ['00:34:170', '00:34:210'],
    ['00:34:545', '00:34:585'],

    //fast
    ['00:34:920', '00:34:960'],
    ['00:35:105', '00:35:145'],
    ['00:35:295', '00:35:335'],

    //normal
    ['00:35:670', '00:35:710'],
    ['00:36:045', '00:36:085'],
    ['00:36:420', '00:36:460'],
    ['00:36:795', '00:36:835'],
    ['00:37:170', '00:37:210'],
    ['00:37:545', '00:37:585'],

    //fast
    ['00:37:920', '00:37:960'],
    ['00:38:105', '00:38:145'],
    ['00:38:295', '00:38:335'],

    //normal
    ['00:38:670', '00:38:710'],
    ['00:39:045', '00:39:085'],
    ['00:39:420', '00:39:460'],
    ['00:39:795', '00:39:835'],
    ['00:40:170', '00:40:210'],
    ['00:40:545', '00:40:585'],

    //fast
    ['00:40:920', '00:40:960'],
    ['00:41:105', '00:41:145'],
    ['00:41:295', '00:41:335'],

    //normal
    ['00:41:670', '00:41:710'],
    ['00:42:045', '00:42:085'],
    ['00:42:420', '00:42:460'],
    ['00:42:795', '00:42:835'],
    ['00:43:170', '00:43:210'],
    ['00:43:545', '00:43:585'],

    //fast
    ['00:43:920', '00:43:960'],
    ['00:44:105', '00:44:145'],
    ['00:44:295', '00:44:335'],

    //normal
    ['00:44:670', '00:44:710'],
    ['00:45:045', '00:45:085'],
    ['00:45:420', '00:45:460'],
    ['00:45:795', '00:45:835'],
    ['00:46:170', '00:46:210'],
    ['00:46:545', '00:46:585'],

    //fast
    ['00:46:920', '00:46:960'],
    ['00:47:105', '00:47:145'],
    ['00:47:295', '00:47:335'],

    // New section
    ['00:48:800', '00:48:840'],

    ['00:49:920', '00:48:970'],
    ['00:50:105', '00:50:145'],
    ['00:50:305', '00:50:305'],
    ['00:50:670', '00:50:710'],
    ['00:50:855', '00:50:895'],
    ['00:51:045', '00:51:085'],

    //30ms
    ['00:51:605', '00:51:635'],
    ['00:51:795', '00:51:825'],

    //40ms
    ['00:52:170', '00:52:210'],
    ['00:52:550', '00:52:590'],

    //Start refrein
    ['00:53:300', '00:53:340'],
    ['00:53:670', '00:53:710'],
    ['00:54:045', '00:54:085'],
    ['00:54:420', '00:54:460'],
    ['00:54:795', '00:54:835'],
    ['00:55:165', '00:55:205'],
    ['00:55:545', '00:55:585'],
    ['00:55:920', '00:55:960'],
    ['00:56:290', '00:56:330'],
    ['00:56:665', '00:56:705'],
    ['00:57:040', '00:57:080'],
    ['00:57:415', '00:57:455'],
    ['00:57:790', '00:57:830'],
    ['00:58:165', '00:58:205'],
    ['00:58:545', '00:58:585'],
    ['00:58:920', '00:58:960'],
    ['00:59:290', '00:59:330'],
    ['00:59:665', '00:59:705'],
    ['01:00:420', '01:00:460'],
    ['01:00:795', '01:00:835'],
    ['01:01:165', '01:01:205'],
    ['01:01:545', '01:01:585'],
    ['01:01:920', '01:01:960'],
    ['01:02:290', '01:02:330'],
    ['01:02:665', '01:02:705'],
    ['01:03:040', '01:03:080'],
    ['01:03:415', '01:03:455'],
    ['01:03:790', '01:03:830'],
    ['01:04:165', '01:04:205'],
    ['01:04:545', '01:04:585'],
    ['01:04:920', '01:04:960'],
    ['01:05:290', '01:05:330'],
    ['01:05:665', '01:05:705'],
    ['01:06:040', '01:06:080'],
    ['01:06:415', '01:06:455'],
    ['01:06:790', '01:06:830'],
    ['01:07:165', '01:04:205'],
    ['01:07:545', '01:07:585'],
    ['01:07:920', '01:07:960'],
    ['01:08:290', '01:08:330'],
    ['01:08:665', '01:08:705'],
    ['01:09:040', '01:09:080'],
    ['01:09:415', '01:09:455'],
    ['01:09:790', '01:09:830'],
    ['01:10:165', '01:10:205'],
    ['01:10:545', '01:10:585'],
    ['01:10:920', '01:10:960'],
    ['01:11:290', '01:11:330'],
    ['01:11:665', '01:11:705'],
    ['01:12:420', '01:12:460'],
    ['01:12:795', '01:12:835'],
    ['01:13:165', '01:13:205'],
    ['01:13:545', '01:13:585'],
    ['01:13:920', '01:13:960'],
    ['01:14:290', '01:14:330'],
    ['01:14:665', '01:14:705'],
    ['01:14:040', '01:14:080'],
    ['01:14:415', '01:14:455'],
    ['01:14:790', '01:14:830'],
    ['01:15:165', '01:15:205'],
    ['01:15:545', '01:15:585'],

    //New Section
    ['01:15:790', '01:15:830'],
    ['01:16:165', '01:16:205'],
    ['01:16:545', '01:16:585'],
    ['01:16:920', '01:16:960'],
    ['01:17:105', '01:17:145'],
    ['01:17:295', '01:17:335'],
    ['01:17:665', '01:17:705'],
    ['01:18:045', '01:18:085'],
    ['01:18:415', '01:18:455'],
    ['01:18:790', '01:18:830'],
    ['01:19:165', '01:19:205'],
    ['01:19:545', '01:19:585'],
    ['01:19:920', '01:19:960'],
    ['01:20:290', '01:20:330'],
    ['01:20:665', '01:20:705'],
    ['01:21:045', '01:21:085'],
    ['01:21:415', '01:21:455'],
    ['01:21:790', '01:21:830'],
    ['01:22:165', '01:22:205'],
    ['01:22:545', '01:22:585'],
    ['01:22:920', '01:22:960'],
    ['01:23:290', '01:23:330'],
    ['01:23:665', '01:23:705'],
    ['01:24:045', '01:24:085'],
    ['01:24:415', '01:24:455'],
    ['01:24:790', '01:24:830'],
    ['01:25:165', '01:25:205'],
    ['01:25:545', '01:25:585'],
    ['01:25:920', '01:25:960'],
    ['01:26:290', '01:26:330'],
    ['01:26:665', '01:26:705'],
    ['01:27:045', '01:27:085'],
  ]; // End at 01:42:000

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ title: 'Home' }}>
          {(props) => <HomeScreen {...props} inputTimes={inputTimes} />}
        </Stack.Screen>
        <Stack.Screen name="WithVideoPlayer" component={AppWithVideoPlayer} />
        <Stack.Screen name="WithoutVideoPlayer" component={AppWithoutVideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
