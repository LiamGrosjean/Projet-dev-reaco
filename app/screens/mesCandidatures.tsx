import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import JobCard from '@/app/components/jobCard';
import Colors from '@/constants/Colors';
import Header from '@/app/components/header';
import Search from '@/app/components/Search';
import GlobalApi from '@/app/Utils/GlobalApi';
import { Stack } from 'expo-router';


const mesCandidatures = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const result: any = await GlobalApi.getJobs();
        setJobs(result.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
  
    fetchJobs();
  }, []);

  return (
    <View>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
        />
      <Search titre='Mes candidatures'/>
      <FlatList
        data={jobs as any[]} // Add type assertion to 'any[]'
        style={{paddingHorizontal: 33, backgroundColor: Colors.light.background, flexDirection: 'column',}}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JobCard 
            title={item.titre} 
            image={item.companyImage.url}
            company={item.companyName} 
            description={item.descriptionJob} 
            emplacement={item.jobLocation}
            hSemaine={item.jobHours}
            hSalaire={item.jobSalary}
            jobLien={item.id}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 33,
    paddingTop: 24,
  },
});

export default mesCandidatures;
