// src/Home.tsx
import {
  Avatar,
  Box,
  Center,
  Heading,
  SimpleGrid,
  Spinner,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useAuth } from "../../../context/auth";

// Registering the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface User {
  name: string;
}

interface FinancialData {
  expenses: number;
  income: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<FinancialData | null>(null);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  const firstUserName = user?.name.split(" ")[0];

  useEffect(() => {
    // Função assíncrona para buscar dados fictícios
    const fetchData = async () => {
      try {
        // Dados fictícios
        const userData: User = { name: "João Silva" };
        const financialData: FinancialData = {
          expenses: 1200.45,
          income: 3200.75,
        };

        // Simula um atraso de rede
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // setUser(userData);
        setData(financialData);

        // Chamadas à API estão comentadas para uso futuro
        // const userResponse = await axios.get('/api/user');
        // const financialResponse = await axios.get('/api/financial-data');
        // setUser(userResponse.data);
        // setData(financialResponse.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  // Dados para o gráfico
  const chartData = {
    labels: ["Despesas", "Ganhos"],
    datasets: [
      {
        label: "Valores",
        data: [data?.expenses || 0, data?.income || 0],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box p={5} bg={useColorModeValue("gray.50", "gray.800")} minHeight="100vh">
      {user && (
        <Box textAlign="center" mb={8}>
          <Avatar name={firstUserName} size="xl" mb={4} />
          <Heading color={useColorModeValue("gray.800", "white")}>
            Olá, {firstUserName}!
          </Heading>
        </Box>
      )}

      {data && (
        <VStack spacing={8} align="stretch">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stat>
              <StatLabel>Despesas</StatLabel>
              <StatNumber>${data.expenses.toFixed(2)}</StatNumber>
              <StatHelpText>Despesas totais</StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>Ganhos</StatLabel>
              <StatNumber>${data.income.toFixed(2)}</StatNumber>
              <StatHelpText>Ganhos totais</StatHelpText>
            </Stat>
          </SimpleGrid>

          <Box
            p={4}
            borderWidth={1}
            borderRadius="lg"
            bg={useColorModeValue("white", "gray.700")}
          >
            <Heading size="md" mb={4} textAlign="center">
              Relação de Despesas e Ganhos
            </Heading>
            <Line data={chartData} />
          </Box>
        </VStack>
      )}
    </Box>
  );
};

export default Home;
