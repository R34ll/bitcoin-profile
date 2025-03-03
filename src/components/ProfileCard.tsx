import { Box, Divider, Typography } from "@mui/material";

export default function ProfileCard() {
    // Common styles for text blocks
    const textStyle = { fontSize: "1.2rem", fontWeight: 500 };

    // Data for transactions
    const transactions = [
        { label: "Last Transaction", value: "400" },
        { label: "Biggest Send", value: "400" },
        { label: "Biggest Received", value: "400" },
        { label: "Max Amount", value: "400" },
    ];

    return (
        <Box
            sx={{
                color: "white",
                backgroundColor: "#222222",
                width: "22rem",
                height: "30rem",
                borderRadius: "1rem",
                padding: "2rem",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.3)", // Adds a subtle shadow
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Title Section */}
            <Box
                sx={{
                    height: "8rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Typography sx={{ fontSize: "2.5rem", fontWeight: "bold", textDecoration: "underline" }}>
                    400 BC
                </Typography>
            </Box>

            <Divider sx={{ backgroundColor: "white", width: "100%" }} />

            {/* Transaction List */}
            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {transactions.map((item, index) => (
                    <Box key={index} sx={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0" }}>
                        <Typography sx={textStyle}>{item.label}</Typography>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>{item.value}</Typography>
                        
                    </Box>

                ))}

            </Box>

            <Divider sx={{ backgroundColor: "white", width: "100%" }} />
        </Box>
    );
}
